import { Component, OnInit, Input } from '@angular/core';
import { StoryDTO, StroyPageInput } from '../support/application.dtos';

@Component({
    selector: 'app-storypage',
    templateUrl: './storypage.component.html',
    styleUrls: ['./storypage.component.css']
})

export class StorypageComponent implements OnInit {
    @Input() public storyPageInput: StroyPageInput;
    public storyDetails: StoryDTO;
    public storyName: string;
    public storyTitle: string;
    public storyDesc: string;
    public blank: any = '';

    constructor() { }

    ngOnInit() {
        this.storyDetails = this.storyPageInput.storyDTO;
        this.storyTitle = this.storyPageInput.storyTitle;
        this.storyName = this.storyPageInput.storyName;
        this.storyDesc = this.storyPageInput.storyDesc;
    }

}
