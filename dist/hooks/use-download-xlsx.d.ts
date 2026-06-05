/** Хук для скачивания xlsx */
export declare function useDownloadXlsx({ file, cb }: {
    file: Blob | null | undefined;
    cb: () => void;
}): () => void;
