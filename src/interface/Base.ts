interface Base {
  name: String;
  price: Number;
  picUrl?: String;
}

export interface Weapen extends Base {
  damage: Number;
  magazineClip: Number;
  type: String;
}

export interface PlayModule extends Base {
  sex: Number; // 0 man   1 woman
}
