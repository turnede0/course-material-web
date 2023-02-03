export type CoursesResourcesType = {
  filename: string;
  fileDownloadUrl: string;
};

export type CoursesType = {
  courseName: string;
  courseID: string;
  description: string;
  category: string;
  image: string;
  downloadUrl: string;
  resources: CoursesResourcesType[];
};

export type CourseInfoType = {
  category: string;
  courses: CoursesType[];
};
