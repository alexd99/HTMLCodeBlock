const themes = {
  custom: {
    name: "default",
    options: {
      addition: "",
      attr: "",
      attribute: "",
      background: "",
      built_in: "",
      "builtin-name": "",
      bullet: "r",
      class: "",
      code: "",
      comment: "",
      deletion: "",
      doctag: "",
      emphasis: "",
      formula: "",
      function: "",
      keyword: "",
      link: "",
      literal: "",
      meta: "",
      "meta-keyword": "",
      "meta-string": "",
      name: "",
      number: "",
      params: "",
      quote: "",
      regexp: "",
      section: "",
      "selector-attr": "",
      "selector-class": "",
      "selector-id": "",
      "selector-pseudo": "",
      "selector-tag": "",
      string: "",
      strong: "",
      subst: "",
      symbol: "",
      tag: "",
      "template-tag": "",
      "template-variable": "",
      "text-color": "",
      title: "",
      type: "",
      variable: ""
    }
  },
  default: {
    name: "default",
    options: {
      addition: "rgba(255,184,28,1)",
      attr: "rgba(255,184,28,1)",
      attribute: "rgba(255,184,28,1)",
      background: "rgba(58,61,64,1)",
      built_in: "rgba(255,184,28,1)",
      "builtin-name": "rgba(255,184,28,1)",
      bullet: "rgba(125,227,244,1)",
      class: "rgba(255,184,28,1)",
      code: "rgba(190,210,30,1)",
      comment: "rgba(189,192,192,1)",
      deletion: "rgba(189,192,192,1)",
      doctag: "rgba(189,192,192,1)",
      emphasis: "rgba(169,173,173,1)",
      formula: "rgba(169,173,173,1)",
      function: "rgba(255,184,28,1)",
      keyword: "rgba(255,184,28,1)",
      link: "rgba(125,227,244,1)",
      literal: "rgba(125,227,244,1)",
      meta: "rgba(189,192,192,1)",
      "meta-keyword": "rgba(189,192,192,1)",
      "meta-string": "rgba(189,192,192,1)",
      name: "rgba(255,184,28,1)",
      number: "rgba(125,227,244,1)",
      params: "rgba(135,138,140,1)",
      quote: "rgba(125,227,244,1)",
      regexp: "rgba(125,227,244,1)",
      section: "rgba(255,184,28,1)",
      "selector-attr": "rgba(255,184,28,1)",
      "selector-class": "rgba(190,210,30,1)",
      "selector-id": "rgba(255,184,28,1)",
      "selector-pseudo": "rgba(255,184,28,1)",
      "selector-tag": "rgba(255,184,28,1)",
      string: "rgba(125,227,244,1)",
      strong: "rgba(169,173,173,1)",
      subst: "rgba(255,184,28,1)",
      symbol: "rgba(255,184,28,1)",
      tag: "rgba(255,184,28,1)",
      "template-tag": "rgba(255,184,28,1)",
      "template-variable": "rgba(255,184,28,1)",
      "text-color": "rgba(208,211,211,1)",
      title: "rgba(255,184,28,1)",
      type: "rgba(255,184,28,1)",
      variable: "rgba(255,184,28,1)"
    }
  }
};

const getThemes = () => {
  let returnArray = [];
  for (let theme in themes) {
    const key = theme;
    returnArray.push(key);
  }
  return returnArray;
};

export default themes;
export const themesArray = getThemes();
