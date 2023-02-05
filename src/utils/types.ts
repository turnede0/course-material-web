export type CoursesResourcesType = {
  topic: string;
  downloadUrl: string;
};

export type CoursesType = {
  courseName: string;
  courseID: string;
  description: string;
  categoryID: string;
  image?: string;
  downloadUrl?: string;
  resources?: CoursesResourcesType[];
};

export type CourseInfoType = {
  categoryID: string;
  categoryDescription: string;
  courses: CoursesType[];
}[];

export type CourseCategoryType = {
  categoryID: string;
  categoryName: string;
  imgUrl: string;
  isActive: boolean;
}[];
