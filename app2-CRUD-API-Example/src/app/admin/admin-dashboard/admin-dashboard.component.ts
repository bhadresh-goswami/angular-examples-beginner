import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from 'primeng/card';
import { Root } from 'src/app/models/que.model';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  queObj!: Root;
  constructor(private questionServ: QuestionService) {}
  ngOnInit(): void {
    this.queObj = {
      createdBy: 'string',
      createdOn: '2023-04-06T07:02:46.766Z',
      modifiedBy: 'string',
      lastModifiedOn: '2023-04-06T07:02:46.766Z',
      id: 0,
      technologyId: 1,
      experienceLevelId: 0,
      questionName: '<p>sample One ?</p>\n',
      marks: 0,
      timeSlot: 0,
      isActive: true,
      options: [
        {
          id: 0,
          questionId: 0,
          questionOptionName: 'awe1',
          questionLabelOption: 'A',
          createdBy: 'string',
          createdOn: '2023-04-06T07:02:46.766Z',
          modifiedBy: 'string',
          lastModifiedOn: '2023-04-06T07:02:46.766Z',
          correctAnswer: true,
        },
        {
          id: 0,
          questionId: 0,
          questionOptionName: 'awe2',
          questionLabelOption: 'B',
          createdBy: 'string',
          createdOn: '2023-04-06T07:02:46.766Z',
          modifiedBy: 'string',
          lastModifiedOn: '2023-04-06T07:02:46.766Z',
          correctAnswer: false,
        },
        {
          id: 0,
          questionId: 0,
          questionOptionName: 'awe3',
          questionLabelOption: 'C',
          createdBy: 'string',
          createdOn: '2023-04-06T07:02:46.766Z',
          modifiedBy: 'string',
          lastModifiedOn: '2023-04-06T07:02:46.766Z',
          correctAnswer: false,
        },
        {
          id: 0,
          questionId: 0,
          questionOptionName: 'awe4',
          questionLabelOption: 'D',
          createdBy: 'string',
          createdOn: '2023-04-06T07:02:46.766Z',
          modifiedBy: 'string',
          lastModifiedOn: '2023-04-06T07:02:46.766Z',
          correctAnswer: false,
        },
      ],
    };
    this.questionServ.postQuestion(this.queObj).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
    /*
    {
  "createdBy": "string",
  "createdOn": "2023-04-06T07:02:46.766Z",
  "modifiedBy": "string",
  "lastModifiedOn": "2023-04-06T07:02:46.766Z",
  "id": 0,
  "technologyId": 0,
  "experienceLevelId": 0,
  "questionName": "<p>sample One ?</p>\n",
  "marks": 0,
  "timeSlot": 0,
  "isActive": true,
  "options": [
    {
      "id": 0,
      "questionId": 0,
      "questionOptionName": "fwaerae",
      "questionLabelOption": "A",
      "createdBy": "string",
      "createdOn": "2023-04-06T07:02:46.766Z",
      "modifiedBy": "string",
      "lastModifiedOn": "2023-04-06T07:02:46.766Z",
      "correctAnswer": true
    }
  ]
}
     */
  }
}
