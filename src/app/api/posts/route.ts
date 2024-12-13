import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.BASE_URL || '';

export async function GET(request: Request) {
  try {
    if (request.url.includes('id=')) {
      const splits = request.url.split('id=');
      const id = splits[splits.length - 1];
      const { data } = await axios.get(BASE_URL + '/posts?id=' + id);
      return NextResponse.json({ post: data[0] });
    }

    // TODO: Get request paramS (id and perPage) and enable load more for pagination
    const { data } = await axios.get(BASE_URL + '/posts?_start=1&_limit=' + 20);
    return NextResponse.json({ posts: data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
