import { useRoute } from 'vitepress';
import { ref, watch } from 'vue';
export function useNav() {
    const isScreenOpen = ref(false);
    const openScreen = () => {
        isScreenOpen.value = true;
        window.addEventListener('resize', closeScreenOnTabletWindow);
    }
    const closeScreen = () => {
        isScreenOpen.value = false;
        window.removeEventListener('resize', closeScreenOnTabletWindow);
    }
    const toggleScreen = () => {
        isScreenOpen.value ? closeScreen() : openScreen();
    }
    function closeScreenOnTabletWindow() {
        window.outerWidth >= 768 && closeScreen();
    }
    const route = useRoute();
    watch(() => route.path, closeScreen);
    return {
        isScreenOpen,
        openScreen,
        closeScreen,
        toggleScreen
    };

}