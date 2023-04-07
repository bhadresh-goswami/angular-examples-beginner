export interface Root {
  createdBy: string;
  createdOn: string;
  modifiedBy: string;
  lastModifiedOn: string;
  id: number;
  technologyId: number;
  experienceLevelId: number;
  questionName: string;
  marks: number;
  timeSlot: number;
  isActive: boolean;
  options: Option[];
}

export interface Option {
  id: number;
  questionId: number;
  questionOptionName: string;
  questionLabelOption: string;
  createdBy: string;
  createdOn: string;
  modifiedBy: string;
  lastModifiedOn: string;
  correctAnswer: boolean;
}
