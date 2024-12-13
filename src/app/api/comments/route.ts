import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.BASE_URL || '';

export async function GET(request: Request) {
  try {
    // TODO: Get request paramS (id and perPage) and enable load more for pagination
    const { data } = await axios.get(BASE_URL + '/comments');
    return NextResponse.json({ comments: data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
