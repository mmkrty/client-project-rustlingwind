/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        prime: "#80A4A9",
        sec: "#39393A",
      },
      backgroundImage: {
        product:
          "url(https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/278449693_114844141189562_7879203020232767708_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UDsN-V4dHBQAX-wCbyT&_nc_ht=scontent-ber1-1.xx&oh=00_AT_RPxz18aSmXJLe-9rHjrj13RUYPZpyo5MIY__rjJyEzg&oe=6347B8A2)",
      },
    },
  },
  plugins: [],
};
