# Quick Start: Publishing Your First Content in Sanity

## ✅ Your Sanity Studio is Working!

The site is now fetching data from Sanity correctly. Currently, you have published the **Writing Section**, which is why it shows `writing: true` in the logs.

To see your Sanity content replace the static content, you need to **publish documents for each section**.

---

## 📝 How to Publish Content for Each Section

### 1. Go to Sanity Studio
Open your browser to: **http://localhost:3000/studio**

### 2. Create & Publish Each Section

You'll see **6 sections** in the sidebar. You need to create and publish ONE document for each:

#### ✅ Hero Section
1. Click "Hero Section" in sidebar
2. Click "Create" button (if no document exists)
3. Fill in:
   - **Main Headline**: "Hello and welcome to my creative space!"
   - **Sub-headline**: "I am Marilyn. Aspiring journalist..."
   - **CTA Text**: "Explore My Work"
   - **Hero Image**: Upload your main portrait photo
   - **Auxiliary Images**: Upload 1-3 decorative photos (optional)
4. Click **"Publish"** button (green, bottom-right)

#### ✅ Writing Section (Already Done!)
- You've already published this one ✓
- You can edit/add more pieces anytime

#### ✅ Photography Section
1. Click "Photography Section" in sidebar
2. Click "Create" button
3. Fill in:
   - **Intro Text**: Paragraph about your photography
   - **Gallery**: Click "Add item" for each photo
     - Upload image
     - Add caption and alt text
     - Adjust hotspot (focal point)
4. Click **"Publish"**

#### ✅ Radio Section
1. Click "Radio Section" in sidebar
2. Click "Create" button
3. Fill in:
   - **Intro Text**: Paragraph about your radio work
   - **CTA Text**: "Listen to My Clips"
   - **CTA Link**: Your Spotify/SoundCloud URL
   - **Moments**: Upload 1-3 radio photos
4. Click **"Publish"**

#### ✅ About Section
1. Click "About Section" in sidebar
2. Click "Create" button
3. Fill in:
   - **Title**: "About Me"
   - **Paragraphs**: Add 2-5 text blocks about yourself
     - Click "Add item" for each paragraph
     - Paste your bio text
4. Click **"Publish"**

#### ✅ Contact Section
1. Click "Contact Section" in sidebar
2. Click "Create" button
3. Fill in:
   - **Title**: "Let's Connect"
   - **Subtitle**: Your contact invitation message
   - **Socials**: Add your social links
     - Click "Add item" for each platform
     - Select platform (Instagram, LinkedIn, etc.)
     - Add label and URL
4. Click **"Publish"**

---

## 🔄 What Happens After Publishing

### Immediate Effect
- Refresh your website (http://localhost:3000)
- Your Sanity content now replaces the static content
- Changes appear **instantly** - no redeployment needed!

### Check the Terminal
You'll see logs like:
```
✅ Fetched fresh content from Sanity: {
  hero: true,          ← ✅ Now published!
  writing: true,       ← ✅ Already published
  photography: true,   ← ✅ Now published!
  radio: true,         ← ✅ Now published!
  about: true,         ← ✅ Now published!
  contact: true        ← ✅ Now published!
}
```

---

## 💡 Important Notes

### One Document Per Section
- Each section type should have **exactly ONE document**
- Don't create multiple Hero sections or Contact sections
- Only the Writing and Photography sections have arrays of items inside

### Publishing vs Saving Draft
- **Save Draft** = Saves your work but doesn't show on website
- **Publish** = Makes content live on website immediately
- You can save drafts and publish later

### Editing Existing Content
1. Click on the section in Sanity Studio
2. Make your changes
3. Click "Publish" again
4. Refresh your website to see updates

### If You Don't See Changes
1. Make sure you clicked "Publish" (not just "Save Draft")
2. Hard refresh your browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
3. Check the terminal logs to confirm data is being fetched
4. Check that the document has a green "Published" status

---

## 🎯 Quick Checklist

Create and publish these 6 documents in Sanity Studio:

- [ ] Hero Section
- [x] Writing Section (Done!)
- [ ] Photography Section
- [ ] Radio Section
- [ ] About Section
- [ ] Contact Section

**Once all 6 are published, your entire website will be powered by Sanity!**

---

## 🚀 Result

After publishing all sections:
- ✅ All Sanity content appears on website
- ✅ Static fallback content is no longer used
- ✅ You can update content anytime via Studio
- ✅ Changes appear instantly without redeployment

**You're all set!** 🎉
