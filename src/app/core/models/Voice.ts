export interface IVoice {
    id: string;
    name: string;
    icon: string;
    tags: string[];
}

export class Voice implements IVoice {
    id: string;
    name: string;
    icon: string;
    tags: string[];

    constructor(id: string, name: string, icon: string, tags: string[]) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.tags = tags;
    }
}