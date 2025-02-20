import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

interface MarkdownEditorProps {
  onChange: (content: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onChange }) => {
  const [content, setContent] = useState<string>('');

  return (
    <div className="mt-4">
      <MDEditor
        value={content}
        style={{ background: '#eeedec', color: '#000000' }}
        onChange={(text) => {
          setContent(text || '');
          onChange(text || '');
        }}
      />
      <div className="mt-4">
        <MDEditor.Markdown
          source={content}
          style={{
            padding: '20px',
            background: '#eeedec',
            color: '#000000',
            border: 'solid 1px',
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
