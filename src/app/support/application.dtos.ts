export class DataListDTO {
    title: string;
    name: string;
    image: string;
}

export class StoryDTO {
    text: string;
    image: string;
}
export class ResponseDTO {
    dataList: DataListDTO[];
}
export class StoryResponseDTO {
    storyList: StoryDTO[];
}
export class StroyPageInput {
    storyDTO: StoryDTO;
    storyName: string;
    storyTitle: string;
    storyDesc: string;
}
