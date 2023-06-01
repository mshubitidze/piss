"use client"

import Image from "next/image"

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css"
import { useState } from "react"
import { UploadButton, UploadDropzone } from "@uploadthing/react"

import { OurFileRouter } from "@/app/api/uploadthing/core"

export default function UploadthingPage() {
  const [filesData, setFilesData] =
    useState<{ fileKey: string; fileUrl: string }[]>()

  return (
    <main className="flex flex-col items-center justify-center gap-8 p-24">
      {filesData &&
        filesData.map((fileData) => (
          <>
            <Image
              src={fileData.fileUrl}
              alt="uploaded image"
              width={500}
              height={500}
            />
            <p>{fileData.fileUrl}</p>
          </>
        ))}
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res)
          alert("Upload Completed")
          if (res) setFilesData(res)
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`)
        }}
      />
      <UploadDropzone<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res)
          alert("Upload Completed")
          if (res) setFilesData((c) => (c ? c.concat(res) : res))
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`)
        }}
      />
    </main>
  )
}
