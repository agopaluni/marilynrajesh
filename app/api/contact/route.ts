import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function POST(request: Request) {
  try {
    // Check if Sanity client is configured
    if (!client) {
      return NextResponse.json(
        { error: 'Sanity client not configured' },
        { status: 500 }
      )
    }

    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create document in Sanity
    const result = await client.create({
      _type: 'contactSubmission',
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    })

    return NextResponse.json({ success: true, id: result._id })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
