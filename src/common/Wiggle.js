import { BaseTypes, DynamicObject } from 'lance-gg';

export default class Wiggle extends DynamicObject {

    static get netScheme() {
        return Object.assign({
            direction: { type: BaseTypes.TYPES.FLOAT32 },
            bodyLength: { type: BaseTypes.TYPES.INT16 },
            friendlyName : { type: BaseTypes.TYPES.STRING }
        }, super.netScheme);
    }

    constructor(gameEngine, options, props) {
        super(gameEngine, options, props);
        this.class = Wiggle;
        this.bodyParts = [];
    }

    syncTo(other) {
        super.syncTo(other);
        this.direction = other.direction;
        this.bodyLength = other.bodyLength;
        this.friendlyName = other.friendlyName;
    }

    toString() {
        return `Wiggle::${super.toString()} direction=${this.direction} length=${this.bodyLength} name=${this.friendlyName}`;
    }
}
