/**
 * Teaching Demo
 *
 * The section stays hidden until `videoUrl` is filled in.
 * Supported: a YouTube link (watch / youtu.be / embed) or a direct video file
 * (.mp4 / .webm), e.g. "/videos/gradient-descent.mp4" placed in /public/videos.
 */
export type TeachingDemo = {
  title: string;
  topic: string;
  description: string;
  videoUrl: string;
  duration?: string;
  notesUrl?: string;
};

export const teachingDemo: TeachingDemo = {
  title: "",
  topic: "",
  description: "",
  videoUrl: "",
  duration: "",
  notesUrl: "",
};
