from PIL import Image
import numpy as np

# Load the image
img_path = r'C:\primecare\denture\images\nwe\f03fd424-e08c-441f-868a-2f06a92e5f31.jfif'
img = Image.open(img_path).convert('RGBA')

# Convert to numpy array
data = np.array(img)

# The checkerboard is white (255,255,255) and gray (around 204,204,204)
# The logo is dark blue and light blue.
# We will make any pixel that has high Red and Green values transparent.
# Dark blue is low R, low G, high B. Light blue is low R, high G, high B.
# White/Gray have R ~= G ~= B.

r, g, b, a = data.T

# A simple heuristic: if R > 150 and G > 150 and B > 150, it's likely the background (checkerboard).
# Also, to be safe, if the difference between R, G, B is small, it's grayscale.
# Let's just say if R > 180 and G > 180, make it transparent.
background = (r > 160) & (g > 160)
data[..., 3][background.T] = 0

# Now we want to extract just the tooth icon to combine with our own text.
# The tooth is on the left. Let's crop it.
# We can find the bounding box of non-transparent pixels.
# Since the text is also blue, we'll just crop the left ~30% of the image.
width = img.width
height = img.height
tooth_data = data[:, :int(width * 0.3)]

tooth_img = Image.fromarray(tooth_data)

# To use this on a dark background (logo-white), we should probably invert the dark blue to white!
# Dark blue pixels have low R, low G, high B (but not too high).
# Let's find dark pixels and make them white.
r2, g2, b2, a2 = tooth_data.T
dark_blue = (r2 < 100) & (g2 < 100) & (b2 < 150) & (a2 > 0)
# Make them white
tooth_data[..., 0][dark_blue.T] = 255
tooth_data[..., 1][dark_blue.T] = 255
tooth_data[..., 2][dark_blue.T] = 255

tooth_img = Image.fromarray(tooth_data)
# Save the extracted tooth
tooth_img.save(r'C:\primecare\public\demothree\images\tooth_icon.png')
print("Processed image and saved tooth icon!")
