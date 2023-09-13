import { useToast as useToastNotifications, ToastOptions } from 'react-native-toast-notifications';
import { colors } from '@/styles/theme';
import { Platform } from 'react-native';

type ToastProps = {
  message: string | JSX.Element;
  type?: "normal" | "success" | "danger" | "warning" | string;
  options?: Omit<ToastOptions, 'type'>; // Usamos Omit para excluir a propriedade 'type' das opções, já que estamos passando ela separadamente
};

const useToast = (): { showToast: (props: ToastProps) => void } => {
  const toast = useToastNotifications();

  const showToast = ({ message, type = "normal", options }: ToastProps) => {
    toast.show(message, {
      type,
      animationDuration: 300,
      placement: "top",
      dangerColor: colors.attention,
      style: {
        marginTop: Platform.OS === "android" ? 30 : 20,
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 20,
      },
      textStyle: {
        fontFamily: "MontserratSemiBold",
        color: colors.white,
        fontSize: 15,
      },
      duration: 2000,
      animationType: "zoom-in",
      ...options, // Isso permite que você substitua as configurações predefinidas, se necessário
    });
  };

  return { showToast };
};

export default useToast;
