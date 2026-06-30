from PIL import Image
import numpy as np
import base64
import io

img_path = r'C:\primecare\denture\images\nwe\new.png'
img = Image.open(img_path).convert('RGBA')

data = np.array(img)
r, g, b, a = data.T

# Remove white background
# A pixel is considered background if R > 240, G > 240, B > 240
background = (r > 240) & (g > 240) & (b > 240)
data[..., 3][background.T] = 0

transparent_img = Image.fromarray(data)

# Save the original transparent logo for logo.svg
buffered = io.BytesIO()
transparent_img.save(buffered, format="PNG")
logo_b64 = base64.b64encode(buffered.getvalue()).decode('utf-8')

width, height = transparent_img.size

svg_logo = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{logo_b64}" x="0" y="0" width="{width}" height="{height}" />
</svg>"""

with open(r'C:\primecare\public\demothree\images\logo.svg', 'w') as f:
    f.write(svg_logo)

# Now process the image for logo-white (turn dark blue into white)
# The text "Dental Logo" is dark blue.
# Let's say if it's relatively dark overall: R < 100, G < 130
dark_blue = (r < 100) & (g < 130) & (a > 0) & (~background)

data[..., 0][dark_blue.T] = 255
data[..., 1][dark_blue.T] = 255
data[..., 2][dark_blue.T] = 255

white_img = Image.fromarray(data)

buffered_white = io.BytesIO()
white_img.save(buffered_white, format="PNG")
logo_white_b64 = base64.b64encode(buffered_white.getvalue()).decode('utf-8')

svg_logo_white = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{logo_white_b64}" x="0" y="0" width="{width}" height="{height}" />
</svg>"""

with open(r'C:\primecare\public\demothree\images\logo-white.svg', 'w') as f:
    f.write(svg_logo_white)

print("Successfully replaced both logo.svg and logo-white.svg with the new transparent logo!")
