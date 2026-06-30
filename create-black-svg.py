import base64
from PIL import Image
import numpy as np

img_path = r'C:\primecare\denture\images\nwe\f03fd424-e08c-441f-868a-2f06a92e5f31.jfif'
img = Image.open(img_path).convert('RGBA')

data = np.array(img)
r, g, b, a = data.T

# Remove checkerboard (white and light gray)
background = (r > 160) & (g > 160)
data[..., 3][background.T] = 0

# Crop left 30% for the tooth
width = img.width
tooth_data = data[:, :int(width * 0.3)]

tooth_img = Image.fromarray(tooth_data)

import io
buffered = io.BytesIO()
tooth_img.save(buffered, format="PNG")
img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

svg_content = f"""<svg width="250" height="60" viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{img_str}" x="-10" y="0" width="70" height="70" preserveAspectRatio="xMidYMid slice" />
  <text x="60" y="38" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="900" fill="black" letter-spacing="1">NOVA DENTAL</text>
</svg>"""

with open(r'C:\primecare\public\demothree\images\logo.svg', 'w') as f:
    f.write(svg_content)

print("Generated logo.svg with black text!")
