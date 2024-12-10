import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="p-5">
        Information page
        <Card>
            <CardHeader>
                <CardTitle>
                National Council Against Drug Abuse (NCADA)
                </CardTitle>
                <CardDescription>
                    www.ncada.gov.sg
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src= "NCADA_PNG_logo_RGB_2.PNG" alt="NCADA logo"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    National Council Against Drug Abuse (NCADA)
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                Central Narcotics Bureau (CNB)
                </CardTitle>
                <CardDescription>
                www.cnb.gov.sg
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image 
                    src="/cnb_logo.png" 
                    alt="CNB logo"
                />
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Central Narcotics Bureau (CNB)
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                Health Promotion Board (HPB)
                </CardTitle>
                <CardDescription>
                www.hpb.gov.sg
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src= "HPB.png" alt="HPB logo"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Health Promotion Board (HPB)
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                Counseling and Support Services
                </CardTitle>
                <CardDescription>
                Family Service Centres (FSCs)
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src="counselling Online.png" alt="CSS logo"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Counseling and Support Services
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                Singapore Association for Mental Health (SAMH)
                </CardTitle>
                <CardDescription>
                www.samh.org.sg
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src="SAMH-logo-web.png" alt="SAMH logo"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Singapore Association for Mental Health (SAMH)
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                Online and In-Person Support
                </CardTitle>
                <CardDescription>
                www.mindmatters.sg
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src= "Online support.png" alt="In person support"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Online and In-Person Support
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>
                The Singapore Anti-Narcotics Association (SANA)
                </CardTitle>
                <CardDescription>
                www.sana.org.sg
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src= "SANA.png" alt="SANA logo"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    The Singapore Anti-Narcotics Association (SANA)
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Alert>
            <Terminal className="h-4 w-4"/>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>I have added an alert</AlertDescription>
        </Alert>
    </div>
  );
}
