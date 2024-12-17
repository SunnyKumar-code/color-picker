
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Card from './componant/card'

function App() {
 
  const colors = [
    { hex: "#333", color: "gray" },
    { hex: "#000", color: "black" },
    { hex: "#f00", color: "red" },
    { hex: "#0f0", color: "green" },
    { hex: "#00f", color: "blue" },
    { hex: "#ff0", color: "yellow" },
    { hex: "#f0f", color: "magenta" },
    { hex: "#0ff", color: "cyan" },
    { hex: "#800000", color: "maroon" },
    { hex: "#808000", color: "olive" },
    { hex: "#008000", color: "dark green" },
    { hex: "#800080", color: "purple" },
    { hex: "#008080", color: "teal" },
    { hex: "#000080", color: "navy" },
    { hex: "#ffa500", color: "orange" },
    { hex: "#ff4500", color: "orangered" },
    { hex: "#d2691e", color: "chocolate" },
    { hex: "#f4a460", color: "sandy brown" },
    { hex: "#2e8b57", color: "sea green" },
    { hex: "#d8bfd8", color: "thistle" },
    { hex: "#ff69b4", color: "hot pink" },
    { hex: "#cd5c5c", color: "indian red" },
    { hex: "#bc8f8f", color: "rosy brown" },
    { hex: "#b0c4de", color: "light steel blue" },
    { hex: "#8fbc8f", color: "dark sea green" },
    { hex: "#deb887", color: "burlywood" },
    { hex: "#5f9ea0", color: "cadet blue" },
    { hex: "#ffdead", color: "navajo white" },
    { hex: "#ffefd5", color: "papaya whip" },
    { hex: "#ffe4b5", color: "moccasin" },
    { hex: "#ffdab9", color: "peach puff" },
    { hex: "#e6e6fa", color: "lavender" },
    { hex: "#fffacd", color: "lemon chiffon" },
    { hex: "#add8e6", color: "light blue" },
    { hex: "#f08080", color: "light coral" },
    { hex: "#90ee90", color: "light green" },
    { hex: "#ffb6c1", color: "light pink" },
    { hex: "#ffa07a", color: "light salmon" },
    { hex: "#87cefa", color: "light sky blue" },
    { hex: "#778899", color: "light slate gray" },
    { hex: "#b0e0e6", color: "powder blue" },
    { hex: "#8b4513", color: "saddle brown" },
    { hex: "#ff6347", color: "tomato" },
    { hex: "#7fffd4", color: "aquamarine" },
    { hex: "#2f4f4f", color: "dark slate gray" },
    { hex: "#9932cc", color: "dark orchid" },
    { hex: "#ff00ff", color: "fuchsia" },
    { hex: "#4682b4", color: "steel blue" },
    { hex: "#00fa9a", color: "medium spring green" },
    { hex: "#ff7f50", color: "coral" },
    { hex: "#6495ed", color: "cornflower blue" },
    { hex: "#dc143c", color: "crimson" },
    { hex: "#b22222", color: "firebrick" },
    { hex: "#228b22", color: "forest green" },
    { hex: "#ffd700", color: "gold" },
    { hex: "#daa520", color: "goldenrod" },
    { hex: "#adff2f", color: "green yellow" },
    { hex: "#c0c0c0", color: "silver" },
    { hex: "#808080", color: "dark gray" },
    { hex: "#a52a2a", color: "brown" },
    { hex: "#800020", color: "burgundy" },
    { hex: "#ff8c00", color: "dark orange" },
    { hex: "#9400d3", color: "dark violet" },
    { hex: "#556b2f", color: "dark olive green" },
    { hex: "#993300", color: "dark red" },
    { hex: "#b8860b", color: "dark goldenrod" },
    { hex: "#66cdaa", color: "medium aquamarine" },
    { hex: "#00ced1", color: "dark turquoise" },
    { hex: "#20b2aa", color: "light sea green" },
    { hex: "#778899", color: "slate gray" },
    { hex: "#191970", color: "midnight blue" },
    { hex: "#ff1493", color: "deep pink" },
    { hex: "#7b68ee", color: "medium slate blue" },
    { hex: "#c71585", color: "medium violet red" },
    { hex: "#ff69b4", color: "pink" },
    { hex: "#db7093", color: "pale violet red" },
    { hex: "#ff4500", color: "dark orange red" },
    { hex: "#6b8e23", color: "olive drab" },
    { hex: "#fa8072", color: "salmon" },
    { hex: "#9acd32", color: "yellow green" },
    { hex: "#2e8b57", color: "medium sea green" },
    { hex: "#8b0000", color: "dark red" },
    { hex: "#cd853f", color: "peru" },
    { hex: "#ffefd5", color: "papaya whip" },
    { hex: "#ff6347", color: "tomato" },
    { hex: "#ff00ff", color: "fuchsia" },
    { hex: "#7fff00", color: "chartreuse" }
  ];
  
  

  return (
    
    <div className={styles.mainContainer}>
         <div className={styles.innerDiv}>
         { colors.map((color,index)=>{
            return(
              <Card key={index} {...color}/>
            )
          })}
          </div> 
    </div>
  
  )
}

export default App
