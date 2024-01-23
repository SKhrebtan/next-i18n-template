'use client'

import { useTranslation } from "react-i18next";

export default function GoodbyeExampleComp() {
    const { t } = useTranslation();

    return (
        <h2>{t('goodbye')}</h2>
    )
}

