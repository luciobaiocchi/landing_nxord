from PIL import Image, ImageDraw

def make_circle(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Create a mask
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
    
    # Apply mask
    result = Image.new("RGBA", img.size)
    result.paste(img, (0, 0), mask=mask)
    
    result.save(output_path)
    print(f"Saved circular image to {output_path}")

if __name__ == "__main__":
    input_path = "public/logo.png"
    output_path = "public/logo-circle.png"
    make_circle(input_path, output_path)
