
export class LikeComponent {
    constructor (private _likesCount: number, private _isSelected: boolean) {

    }
    
    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

    onClick() {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // } else {
        //     this.likesCount++;
        // }

        // this.likesCount = (this.isSelected) ? this.likesCount-- : this.likesCount++;
        
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }



}