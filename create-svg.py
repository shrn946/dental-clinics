import base64

with open(r'C:\primecare\public\demothree\images\tooth_icon.png', 'rb') as f:
    img_data = f.read()

b64_str = base64.b64encode(img_data).decode('utf-8')

svg_content = f"""<svg width="250" height="60" viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{b64_str}" x="-10" y="0" width="70" height="70" preserveAspectRatio="xMidYMid slice" />
  <text x="60" y="38" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="900" fill="white" letter-spacing="1">NOVA DENTAL</text>
</svg>"""

with open(r'C:\primecare\public\demothree\images\logo-white.svg', 'w') as f:
    f.write(svg_content)

print("Generated logo-white.svg with embedded image!")
