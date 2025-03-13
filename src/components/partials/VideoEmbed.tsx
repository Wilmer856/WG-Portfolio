
import React from 'react'

type VideoEmbed = {
    videoSrc: string;
  };

const VideoEmbed: React.FC<VideoEmbed> = ({ videoSrc }) => {

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "12px", overflow: "hidden", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoSrc}?playsinline=1&autoplay=0&modestbranding=1&rel=0&showinfo=0&controls=1`}
        title="Project Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default VideoEmbed;
