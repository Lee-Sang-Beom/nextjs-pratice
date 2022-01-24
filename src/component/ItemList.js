import { Grid } from 'semantic-ui-react'
import styles from "./ItemList.module.css"
import Link from 'next/link'

export default function ItemList({ list }){
    return (
    <div> 
        <Grid columns={3}>
            <Grid.Row>  
            {list.map((item) => (
                <Grid.Column key = {item.id}>
                    <Link href = "/view/[id]" as = {`/view/${item.id}`}> 
                    {/* next가 가야할 곳 : href, as는 사용자가 직접 url에서 보는 주소 */}
                    <a>
                        <div className={styles.wrap}>
                            <img src= {item.image_link} alt = {item.name} className={styles.img_item}/>
                            <strong className = {styles.tit_item}>{item.name}</strong>
                            <span className={styles.txt_info}>
                                {item.category}
                                {item.product_type}
                            </span>
                            <strong className = {styles.num_price}>${item.price}</strong>
                        </div>
                    </a>
                    </Link>
                </Grid.Column>
            ))}
            </Grid.Row>   
        </Grid>
    </div>
    );
}