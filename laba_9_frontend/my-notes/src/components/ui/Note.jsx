import {Button, Card, CardBody, CardFooter, CardHeader, Heading, Separator, Textarea
} from "@chakra-ui/react";
import moment from "moment/moment";

export default function Note({ title, description, createdAt }) {
    return (
        // <Box variant={"filled"}>
        //     <Heading size={"md"}>{title} </Heading>
        //     <Separator colorPalette={"gray"} />
        //     <Text>{desctiption}</Text>
        //     <Separator colorPalette={"gray"} />
        //     <Footer>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</Footer>
        // </Box>
        <Card.Root variant={"filled"}>
            <Card.Header>
                <Heading size={"md"}>{title}</Heading>
            </Card.Header>
        <Separator borderColor={"gray"} />
        <Card.Body>{description}</Card.Body>
        <Separator borderColor={"gray"} />
        <Card.Footer>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</Card.Footer>
        </Card.Root>
    );
}


// import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Separator, Textarea } from "@chakra-ui/react";
// import moment from "moment/moment";

// export default function Note({ title, description, createdAt }) {  // исправлено с 'desctiption' на 'description'
//     return (
//         <Card variant={"filled"}>
//             <Card.Header>
//                 <Heading size={"md"}>{title}</Heading>  {/* Динамически выводим title */}
//             </Card.Header>
//             <Separator borderColor={"gray"} />
//             <Card.Body>{description}</Card.Body>  {/* Динамически выводим description */}
//             <Separator borderColor={"gray"} />
//             <Card.Footer>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</Card.Footer>
//         </Card>
//     );
// }
