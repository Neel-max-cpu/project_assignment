import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs"

export function TabsDemo() {
    return (
        <Tabs defaultValue="op1" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="op1">SAAS</TabsTrigger>
                <TabsTrigger value="op2">Self Hosted</TabsTrigger>
            </TabsList>

            {/* op1 for saas */}
            <TabsContent value="op1">
                <Card className="h-[300px]">
                    <CardContent>
                        <div className="flex flex-col items-center space-y-4">
                            <Button>Sign in with GitHub</Button>
                            <Button>Sign in with BitBucket</Button>
                            <Button>Sign in with Azure Devops</Button>
                            <Button>Sign in with GitLab</Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* op2 for self hosted */}
            <TabsContent value="op2">
                <Card className="h-[300px]">
                    <CardContent>
                        <div className="flex flex-col items-center space-y-4">
                            <Button>Self Hosted GitLabs</Button>
                            <Button>Sign in with SSO</Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
