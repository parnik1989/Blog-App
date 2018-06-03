import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storypage',
  templateUrl: './storypage.component.html',
  styleUrls: ['./storypage.component.css']
})
export class StorypageComponent implements OnInit {
  public storyName: any = 'kiss_in_rain';
  public storyDetails: any[] = [
    {
        'text': 'One of my friends once handed me That Kiss in the Rain during my college.I was hooked to the story so much that I finished it in a day. Left wanting for more, I read his other book A thing beyond forever',
        'image': 'kiss_in_rain_1'
    },
    {
        'text': 'This book was relatable.',
        'image': 'kiss_in_rain_2'
    },
    {
        'text': 'I could really connect with this book',
        'image': 'kiss_in_rain_3'
    },
    {
        'text': 'It was really loving and inspiring.',
        'image': 'kiss_in_rain_4'
    },
    {
        'text': 'A day in my life which I can relive again and again',
        'image': 'kiss_in_rain_5'
    },
    {
        'text': 'To the end note a memorable and must read for me',
        'image': 'kiss_in_rain_6'
    },
    {
        'text': 'One of the best by Novoneel',
        'image': 'kiss_in_rain_7'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
