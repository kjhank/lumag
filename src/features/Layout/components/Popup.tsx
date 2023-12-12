import sanitize from 'sanitize-html';

import { WPImage, WYSIWYG } from '@/components';
import { PopupBody } from '../Layout.styled';
import { PopupProps } from '../Layout.types';
import { sanitizeConfig as globalSanitizeConfig } from '@/utils/globalConfigs';

export const Popup = ({ data }: PopupProps) => (
  <PopupBody isWider={!data.hasImage}>
    {data?.hasImage && <WPImage imageData={data.image} />}
    {data?.content && (
    <WYSIWYG html={sanitize(data.content.split('<h2>').join('<h2><span>')
      .split('</h2>')
      .join('</span></h2>')
      .split('<video ')
      .join('<video controls '), {
      ...globalSanitizeConfig,
    })}
    />
    )}
  </PopupBody>
);
