import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs"


// icons ---------------------------------------------
import gitH from "../assets/img/github.png"
import bitB from "../assets/img/bitbucket.png"
import azureD from "../assets/img/azuredev.jpg"
import gitL from "../assets/img/gitlab.png"
import key from "../assets/img/key.png"
// --------------------------------------------------

export function TabsDemo() {
    return (
        <div className="my-5">
            <Tabs defaultValue="op1" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-gray-100 text-gray-700 hover:bg-gray-200" value="op1">SAAS</TabsTrigger>
                    <TabsTrigger className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-gray-100 text-gray-700 hover:bg-gray-200" value="op2">Self Hosted</TabsTrigger>
                </TabsList>

                {/* op1 for saas */}
                <TabsContent value="op1">
                    <Card className="h-[300px] rounded-lg">
                        <CardContent className="my-10">                    
                            <div className="flex flex-col items-center space-y-4">
                                <Button className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-md">
                                    <img src={gitH} alt="GitHub" className="w-5 h-5" />
                                    <span>Sign in with GitHub</span>
                                </Button>
                                <Button className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-md">
                                    <img src={bitB} alt="GitHub" className="w-5 h-5" />
                                    <span>Sign in with Bitbucket</span>
                                </Button>
                                <Button className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-md">
                                    <img src={azureD} alt="GitHub" className="w-5 h-5" />
                                    <span>Sign in with Azure Devops</span>
                                </Button>
                                <Button className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-md">
                                    <img src={gitL} alt="GitHub" className="w-5 h-5" />
                                    <span>Sign in with GitLab</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* op2 for self hosted */}
                <TabsContent value="op2">
                    <Card className="h-[300px]">
                        <CardContent className="my-10">
                            <div className="flex flex-col items-center space-y-4">
                                <Button className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-md">
                                    <img src={gitL} alt="GitHub" className="w-5 h-5" />
                                    <span>Self Hosted GitLabs</span>
                                </Button>
                                <Button className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-md">
                                    <img src={key} alt="GitHub" className="w-5 h-5" />
                                    <span>Sign in with SSO</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
