import '@/global.css';
import { Slot, Stack } from 'expo-router';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
//     return <Stack />;
    return (
        <GluestackUIProvider>
            <Stack />
        </GluestackUIProvider>

    );
}
