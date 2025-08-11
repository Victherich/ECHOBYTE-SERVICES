





import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config - ensure .env variables are correctly loaded!
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});


export async function POST(req: NextRequest) {
  const headers = {
    'Access-Control-Allow-Origin': '*',           // Adjust origin for production!
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await req.json();
    const public_id = body.public_id;

    if (!public_id) {
      return new NextResponse(JSON.stringify({ error: 'Missing public_id' }), {
        status: 400,
        headers,
      });
    }

    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result !== 'ok') {
      return new NextResponse(JSON.stringify({ error: 'Cloudinary deletion failed' }), {
        status: 500,
        headers,
      });
    }

    return new NextResponse(JSON.stringify({ success: true, message: 'Image deleted successfully' }), {
      status: 200,
      headers,
    });

  } catch (error) {
    console.error('Cloudinary Deletion Error:', error);
    return new NextResponse(JSON.stringify({ error: 'Server error during image deletion' }), {
      status: 500,
      headers,
    });
  }
}

// Handle preflight CORS requests
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // or your frontend origin
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}






