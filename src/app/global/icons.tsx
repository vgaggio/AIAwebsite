// pages/[project_id]/global/icons.js

import React from 'react';

export const LoadingCircle = () => {
  return (
    <svg
      aria-hidden="true"
      className="animate-spin h-[16px] w-auto aspect-square  fill-stone-600 text-stone-200"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};

export const SendIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      strokeWidth="2"
    >
      <path
        d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const Copy = ({ className }: { className?: string }) => {
  return (
    <svg fill="black" className={className} viewBox="0 0 24 24">
      <path d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z" />
      <path d="M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z" />
    </svg>
  );
};

export const ThumbsUp = ({
  className,
  fireFunction,
}: {
  className?: string;
  fireFunction: any;
}) => {
  return (
    <svg
      onClick={() => fireFunction()}
      fill={"black"}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M12.596 2.043c1.075.076 2.059.281 2.743.956.698.688.92 1.696.92 2.941 0 .432-.057.955-.117 1.438-.026.2-.051.392-.076.572l-.056.429h2.05c.752 0 1.446.108 2.036.404.612.306 1.062.787 1.355 1.431.551 1.214.542 3.008.223 5.394l-.051.39c-.134 1.01-.248 1.872-.396 2.58-.166.795-.394 1.496-.816 2.05-.89 1.168-2.395 1.372-4.583 1.372-2.331 0-4.08-.418-5.544-.824l-.602-.17c-1.023-.29-1.852-.526-2.69-.586A1.75 1.75 0 0 1 5.25 22h-1.5A1.75 1.75 0 0 1 2 20.25V9.75C2 8.784 2.784 8 3.75 8h1.5a1.75 1.75 0 0 1 1.746 1.633 1.85 1.85 0 0 0 .523-.131c.961-.415 2.774-1.534 2.774-4.2V4.249c0-1.22 1.002-2.298 2.303-2.206ZM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26ZM3.75 20.5h1.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25Z" />
    </svg>
  );
};

export const ThumbsDown = ({
  className,
  fireFunction,
}: {
  className?: string;
  fireFunction: any;
}) => {
  return (
    <svg
      onClick={() => fireFunction()}
      fill={"black"}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M12.596 21.957c-1.301.092-2.303-.986-2.303-2.206v-1.053c0-2.666-1.813-3.785-2.774-4.2a1.884 1.884 0 0 0-.523-.13A1.75 1.75 0 0 1 5.25 16h-1.5A1.75 1.75 0 0 1 2 14.25V3.75C2 2.784 2.784 2 3.75 2h1.5a1.75 1.75 0 0 1 1.742 1.58c.838-.06 1.667-.296 2.69-.586l.602-.17C11.748 2.419 13.497 2 15.828 2c2.188 0 3.693.204 4.583 1.372.422.554.65 1.255.816 2.05.148.708.262 1.57.396 2.58l.051.39c.319 2.386.328 4.18-.223 5.394-.293.644-.743 1.125-1.355 1.431-.59.296-1.284.404-2.036.404h-2.05l.056.429c.025.18.05.372.076.572.06.483.117 1.006.117 1.438 0 1.245-.222 2.253-.92 2.942-.684.674-1.668.879-2.743.955ZM7 5.082v7.779c.383.025.759.113 1.113.26 1.192.514 3.68 2.027 3.68 5.577v1.053c0 .436.347.734.698.71 1.021-.072 1.52-.258 1.795-.528.26-.256.473-.748.473-1.873 0-.328-.045-.768-.105-1.25l-.07-.527c-.04-.297-.079-.59-.105-.834-.082-.758.53-1.328 1.211-1.328h2.37c.625 0 1.06-.092 1.365-.245.285-.142.5-.359.66-.711.355-.78.422-2.176.102-4.574l-.05-.385c-.137-1.027-.243-1.827-.379-2.477-.152-.73-.324-1.165-.54-1.448-.386-.507-1.113-.781-3.39-.781-2.136 0-3.736.379-5.142 .771-.191.052-.38.106-.568.16-1.039.296-2.059 .587-3.118 .651ZM3.75 3.5a.25.25 0 0 0-.25 .25v10.5c0 .138.112 .25 .25 .25h1.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z" />
    </svg>
  );
};

export const Reset = ({ className }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#6c6c6c"
        strokeWidth="2"
        d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
      />
    </svg>
  );
};

// Export a default component
const IconsPage = () => {
  return (
    <div>
      <h1>Icons Page</h1>
      <LoadingCircle />
      <SendIcon />
      <Copy />
      <ThumbsUp fireFunction={() => console.log('Thumbs Up')} />
      <ThumbsDown fireFunction={() => console.log('Thumbs Down')} />
      <Reset />
    </div>
  );
};

export default IconsPage;
