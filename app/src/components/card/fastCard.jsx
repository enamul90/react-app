import "./fastCard.module.css";

function fastCard() {

  const img = 'https://scontent.fdac138-1.fna.fbcdn.net/v/t45.5328-4/462471512_1654965965401474_3846402229157774181_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHp9cJcnbPoGjJnbk7Lf3zuFqbbCsF-qZwWptsKwX6pnIeFzGlpM-UNnRySbkMOvChqBj9NspEdGKyqL93u7H1P&_nc_ohc=M6RllsJSzn8Q7kNvgHhiFRH&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=ADBv_Aq80rQ7iOe0-_4bAjs&oh=00_AYAUSo_5Gcp_qsVnews2jMsiWf4VjzY29h8duU24rrBy9Q&oe=67146BAE'
  const tittle = 'This is our product tittle and product variations'
  const paragraph = 'Dolor sit amet consectetur adipisicing elit. Adipisci minima error magnam totam suscipit rerum! Nisi,   nemo cupiditate similique alias ducimus quam quis reiciendis!'

  return (
    <>
      <div className="cardBody">
        <div className="imgBox">
          <img src={img} alt="Product" />
        </div>
        <div className="cardText">
          <h1>{tittle}</h1>
          <p >{paragraph}</p>
          <button>my button</button>
        </div>
      </div>

    </>
  )
}

export default fastCard