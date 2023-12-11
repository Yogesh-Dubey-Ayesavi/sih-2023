import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
  import { EnvironmentInitiative, SocialInitiative, GovernanceInitiative } from "@/components/ESGTabs/index";
  
  export default function TabsDemo() {
    return (
      <Tabs defaultValue="economical" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="economical">Economical</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>
        <TabsContent value="economical">
          <EnvironmentInitiative initiative="economical" />
        </TabsContent>
        <TabsContent value="governance">
          <GovernanceInitiative initiative="governance" />
        </TabsContent>
        <TabsContent value="social">
          <SocialInitiative initiative="social" />
        </TabsContent>
      </Tabs>
    );
  }
  