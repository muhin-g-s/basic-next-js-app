import Image from 'next/image'
import styles from './page.module.css'

async function getData(id){
    const resp = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`, {
      cache: "no-store"
    })
  
    if(!resp.ok){
      throw new Error("Fuck pesp, Pedro")
    }
  
    return await resp.json()
  }

// export async function generateMetadata({params}){
//     const post = await getData(params.id)

//     return {
//         title: post.title,
//         description: post.desc
//     }
// }

const BlogId = async ({params}) => {
    const data = await getData(params.id)
    //console.log(data.blog)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.blog.title}</h1>
          <p className={styles.desc}>{data.blog.description}</p>
          <div className={styles.author}>
            <Image
              src={data.blog.photo_url}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.blog.category}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.blog.photo_url} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.blog.content_text}</p>
      </div>
    </div>
  )
}

export default BlogId