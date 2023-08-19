import Image from "next/image"

export default function ImageCard(props) {
    return (
        <div class="facilities-col">
            <Image width={150} height={250} src={props.source} alt="" />
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
    )
}
