import type {FC} from "react"

const SvelteIcon: FC = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="svelte"
            viewBox="0 0 94 113"
            height="24"
            {...props}
        >
            <path
                fill="#FF3E00"
                d="M87.73 15.39C77.33 0.509993 56.79 -3.90001 41.94 5.55999L15.86 22.18C12.3401 24.3908 9.31973 27.3112 6.99184 30.7549C4.66394 34.1985 3.07962 38.0897 2.34003 42.18C1.09289 49.0837 2.18378 56.2061 5.44003 62.42C3.20833 65.8055 1.68758 69.6091 0.970029 73.6C0.225154 77.7807 0.323576 82.0682 1.25951 86.2103C2.19544 90.3524 3.94999 94.2657 6.42003 97.72C16.82 112.6 37.36 117.01 52.21 107.55L78.29 91C81.8059 88.7845 84.8232 85.8628 87.1505 82.4199C89.4779 78.9771 91.0646 75.0883 91.81 71C93.0526 64.0985 91.9582 56.9796 88.7 50.77C90.9306 47.3828 92.4544 43.5802 93.18 39.59C93.9226 35.4092 93.8231 31.1222 92.8872 26.9804C91.9514 22.8386 90.1981 18.9253 87.73 15.47"
            />
            <path
                fill="#fff"
                d="M39.39 99.16C35.2842 100.225 30.9504 100.006 26.9734 98.5304C22.9964 97.0551 19.5677 94.3954 17.15 90.91C15.6656 88.8333 14.6115 86.4806 14.05 83.9904C13.4884 81.5002 13.4306 78.9229 13.88 76.41C14.0275 75.5926 14.2348 74.7871 14.5 74L14.99 72.5L16.33 73.5C19.4101 75.7487 22.8487 77.4595 26.5 78.56L27.5 78.85L27.41 79.85C27.3138 81.2211 27.6993 82.5828 28.5 83.7C29.2296 84.7485 30.2628 85.5483 31.4607 85.9917C32.6586 86.4351 33.9636 86.5008 35.2 86.18C35.7654 86.0281 36.3047 85.7921 36.8 85.48L62.84 68.86C63.4796 68.4576 64.0279 67.9259 64.4498 67.299C64.8718 66.6722 65.1579 65.964 65.29 65.22C65.4233 64.4617 65.4035 63.6844 65.2318 62.9339C65.06 62.1834 64.7398 61.4749 64.29 60.85C63.5605 59.8015 62.5272 59.0017 61.3293 58.5583C60.1314 58.1149 58.8264 58.0492 57.59 58.37C57.024 58.5201 56.4844 58.7562 55.99 59.07L45.99 65.42C44.3545 66.4571 42.5708 67.2393 40.7 67.74C36.601 68.799 32.276 68.577 28.3069 67.1038C24.3379 65.6306 20.9154 62.977 18.5 59.5C17.02 57.4213 15.9702 55.0679 15.4121 52.5779C14.854 50.0879 14.7989 47.5116 15.25 45C15.6916 42.5348 16.6428 40.1889 18.0427 38.1123C19.4426 36.0357 21.2605 34.274 23.38 32.94L49.5 16.32C51.1259 15.285 52.8994 14.5028 54.76 14C58.8643 12.9339 63.197 13.1533 67.1726 14.6288C71.1481 16.1042 74.575 18.7644 76.99 22.25C78.4762 24.326 79.532 26.6783 80.0953 29.1685C80.6586 31.6588 80.718 34.2365 80.27 36.75C80.114 37.5721 79.9069 38.3837 79.65 39.18L79.15 40.68L77.82 39.68C74.7336 37.4142 71.2845 35.6897 67.62 34.58L66.62 34.29L66.71 33.29C66.8255 31.9121 66.4501 30.5378 65.65 29.41C64.9159 28.3796 63.8855 27.597 62.6958 27.1665C61.5061 26.736 60.2135 26.6779 58.99 27C58.424 27.1501 57.8844 27.3862 57.39 27.7L31.3 44.29C30.6628 44.6927 30.1161 45.2233 29.6944 45.8481C29.2727 46.4729 28.9852 47.1784 28.85 47.92C28.7193 48.68 28.7403 49.4583 28.912 50.21C29.0836 50.9618 29.4024 51.6721 29.85 52.3C30.5762 53.339 31.6012 54.1326 32.7888 54.5755C33.9765 55.0185 35.2709 55.0898 36.5 54.78C37.0646 54.626 37.6037 54.3901 38.1 54.08L48.1 47.74C49.7343 46.6916 51.5226 45.9054 53.4 45.41C57.5033 44.3414 61.8357 44.5586 65.8115 46.0323C69.7873 47.506 73.2146 50.1651 75.63 53.65C77.1152 55.7265 78.1704 58.0789 78.7337 60.5689C79.2969 63.059 79.3569 65.6365 78.91 68.15C78.4684 70.6152 77.5173 72.9611 76.1173 75.0377C74.7174 77.1143 72.8996 78.876 70.78 80.21L44.69 96.83C43.0514 97.8704 41.2644 98.656 39.39 99.16"
            />
        </svg>
    )
}

export default SvelteIcon