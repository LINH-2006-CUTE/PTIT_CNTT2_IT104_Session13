import { Component } from 'react';

interface State {
  theme: string;
  language: string;
}

export default class Bai extends Component<{}, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: 'dark',
      language: 'vietnamese'
    };
  }

  render() {
    const { theme, language } = this.state;
    const backgroundColor = theme === 'light' ? '#ffffff' : '#333333';
    const color = theme === 'light' ? '#000000' : '#ffffff';
    let textTheme: string;
    let textLanguage: string;

    if (theme === 'light') {
      textTheme = 'Nền: Sáng';
    } else {
      textTheme = 'Nền: Tối';
    }

    if (language === 'english') {
      textLanguage = 'Ngôn ngữ: Tiếng Anh';
    } else {
      textLanguage = 'Ngôn ngữ: Tiếng Việt';
    }

    return (
      <div style={{ backgroundColor, color, height: '300px', padding: '100px' }}>
        <h1>{textTheme}</h1>
        <h1>{textLanguage}</h1>
      </div>
    );
  }
}