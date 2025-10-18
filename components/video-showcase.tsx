"use client"

import { Play } from "lucide-react"
import { useState } from "react"

const videos = [
  {
    title: "Race Car POV",
    embedUrl: "https://www.youtube.com/embed/S8b55wS7ax8",
    videoId: "S8b55wS7ax8",
    type: "youtube" as const,
  },
  {
    title: "Boxer POV",
    embedUrl: "https://www.youtube.com/embed/pZOl8xMwWXY",
    videoId: "pZOl8xMwWXY",
    type: "youtube" as const,
  },
  {
    title: "Basketball POV",
    localPath: "/basketball POV.mp4",
    type: "local" as const,
  },
  {
    title: "Soccer POV",
    localPath: "/Soccer POV.mp4",
    type: "local" as const,
  },
  {
    title: "Horse Riding POV",
    localPath: "/Horse_riding POV.mp4",
    type: "local" as const,
  },
  {
    title: "Golf POV",
    localPath: "/Golf POV.mp4",
    type: "local" as const,
  },
  {
    title: "Sky Diving",
    embedUrl: "https://www.youtube.com/embed/gCjqB_kB_qM",
    videoId: "gCjqB_kB_qM",
    type: "youtube" as const,
  },
]

export function VideoShowcase() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
      {videos.map((video, index) => (
        <div
          key={index}
          className="group relative aspect-video rounded-3xl overflow-hidden bg-black/20 border-2 border-white/20 hover:border-white/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1 sm:hover:-translate-y-2"
        >
          {playingIndex === index ? (
            video.type === "youtube" ? (
              <iframe
                src={`${video.embedUrl}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                src={video.localPath}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            )
          ) : (
            <>
              {video.type === "youtube" ? (
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <video
                  src={video.localPath}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  muted
                  playsInline
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <button
                onClick={() => setPlayingIndex(index)}
                className="absolute inset-0 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-80"
                aria-label={`Play ${video.title}`}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-white/50 ring-4 ring-white/20 group-hover:ring-white/30 transition-all">
                  <Play className="w-12 h-12 sm:w-14 sm:h-14 text-[#4d86ad] ml-1" fill="currentColor" />
                </div>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <h3 className="text-white font-bold text-xl sm:text-2xl drop-shadow-lg">{video.title}</h3>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
