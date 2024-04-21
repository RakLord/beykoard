

class key {
  value: number;
  key: string;
  element: HTMLElement;
  keyContainer: HTMLElement;

  constructor(value: number, key: string, keyContainer: HTMLElement) {
    this.value = value;
    this.key = key;
    this.element = document.createElement("div");
    this.keyContainer = keyContainer;

    this.init();
  }

  init() {
    this.element.classList.add("key");
    this.element.style.width = "1.4rem"
    this.element.style.height = this.element.style.width;
    this.element.innerHTML = this.key;
    this.keyContainer.appendChild(this.element);
  }
}

export class KeyManager {
  availableKeys: string[];
  keyCount: number;
  keyContainer: HTMLElement;
  keyArray: key[];
  keyIndex: number;

  constructor() {
    this.keyContainer = document.getElementById("key-container")!;
    this.keyArray = [];
    let keyStr = "isrtgpneao";
    this.availableKeys = keyStr.split("")
    this.keyCount = 8;
    this.keyIndex = 0;

    this.init();
  }

  init() {
    document.addEventListener("keydown", (e) => {
      this.keyPress(e.key);
    });
  }

  setupKeys() {
    this.keyIndex = 0;
    this.keyArray = [];
    this.keyContainer.innerHTML = "";

    for (let i = 0; i < this.keyCount; i++) {
      const letter = this.availableKeys[Math.floor(Math.random() * this.availableKeys.length)];
      this.keyArray.push(
        new key(
          1,
          letter,
          this.keyContainer)
      );
    };

    this.update();
  }

  keyPress(keyPressed: string) {
    console.log(keyPressed);

    // True if the player has pressed all the keys
    if (this.keyIndex >= this.keyCount - 1) {

      this.setupKeys();
    };

    if (keyPressed === this.keyArray[this.keyIndex].key) {
      this.keyIndex++;
      this.update();
    }
  }

  update(): void {
    for (let i = 0; i < this.keyCount; i++) {
      if (i === this.keyIndex) {
        this.keyArray[i].element.classList.add("key-highlight");
      } else {
        this.keyArray[i].element.classList.remove("key-highlight");
      }
    }
  }
}
