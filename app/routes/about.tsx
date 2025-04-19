import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About" },
        { name: "description", content: "Welcome to React Router!" },
        { property: "og:title", content: "About" },
        { property: "og:description", content: "Welcome to React Router!" },
        { property: "og:image", content: "https://itlab.tj/images/product/greenauto.png" },
        { property: "og:type", content: "website" },
        // { property: "og:url", content: "https://yourdomain.com/about" }
    ];
}


export async function clientLoader() {



    return { message: 'test' };
}


export default function About({
    loaderData,
    actionData,
    params,
    matches,
}: Route.ComponentProps) {
    return <div>
        <h1>Welcome to My Route with Props!</h1>
        <p>Loader Data: {JSON.stringify(loaderData)}</p>
        <p>Action Data: {JSON.stringify(actionData)}</p>
        <p>Route Parameters: {JSON.stringify(params)}</p>
        <p>Matched Routes: {JSON.stringify(matches)}</p>
        <img src="https://itlab.tj/images/product/greenauto.png" />
    </div>;
}
