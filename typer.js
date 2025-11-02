// File: typer.js

class Typer {
  constructor(text, speed = 100) {
    this.text = text;
    this.speed = speed;
    this.index = 0;
  }

  type(callback) {
    if (this.index < this.text.length) {
      process.stdout.write(this.text[this.index]);
      this.index++;
      setTimeout(() => this.type(callback), this.speed);
    } else {
      console.log("\n✅ تایپ تموم شد!");
      if (callback) callback();
    }
  }
}

// استفاده از کلاس
const welcomeMessage = new Typer("سلام! این یه پروژه حرفه‌ای جاوااسکریپت هست 😎", 80);
welcomeMessage.type(() => {
  console.log("📦 آماده کامیت و پوش به گیت‌هاب!");
});

