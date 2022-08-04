import * as React from 'react';

import { EditorContent, useEditor } from '@tiptap/react';

import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded';
import Filter2RoundedIcon from '@mui/icons-material/Filter2Rounded';
import Filter3RoundedIcon from '@mui/icons-material/Filter3Rounded';
import Filter4RoundedIcon from '@mui/icons-material/Filter4Rounded';
import Filter5RoundedIcon from '@mui/icons-material/Filter5Rounded';
import Filter6RoundedIcon from '@mui/icons-material/Filter6Rounded';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import FormatUnderlinedRoundedIcon from '@mui/icons-material/FormatUnderlinedRounded';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { setCurrentDescription } from '../../../redux/action.js';
import { useDispatch } from 'react-redux';

// import { useEffect } from 'react';

let editor;

function handleFunction(func) {
  if (!editor) {
    return null;
  }
  switch (func) {
    case 'bold':
      editor.chain().focus().toggleBold().run();
      break;
    case 'italic':
      editor.chain().focus().toggleItalic().run();
      break;
    case 'underline':
      editor.chain().focus().toggleUnderline().run();
      break;
    case `heading ${func.split(' ')[1]}`:
      editor
        .chain()
        .focus()
        .toggleHeading({ level: Number.parseInt(func.split(' ')[1]) })
        .run();
      break;
    case 'bulletList':
      editor.chain().focus().toggleBulletList().run();
      break;
    case 'orderedList':
      editor.chain().focus().toggleOrderedList().run();
      break;
  }
}

function handleColor(func, kind) {
  const arrFunc = ['bold', 'italic', 'underline', 'bulletList', 'orderedList'];
  const headFunc = ['heading 1', 'heading 2', 'heading 3', 'heading 4', 'heading 5', 'heading 6'];

  if (editor) {
    if (
      (arrFunc.includes(func) && editor.isActive(func)) ||
      (headFunc.includes(func) &&
        editor.isActive('heading', { level: Number.parseInt(func.split(' ')[1]) }))
    ) {
      return kind === 'background' ? 'dark.main' : 'white.main';
    } else {
      return kind === 'background' ? 'white.main' : 'dark.main';
    }
  } else {
    return kind === 'background' ? 'white.main' : 'dark.main';
  }
}

function IconButtonComponent(props) {
  const { icon, style, func } = props;

  return (
    <IconButton
      sx={[
        {
          color: handleColor(func, 'icon'),
          borderRadius: '4px',
          backgroundColor: handleColor(func, 'background'),
          marginRight: style
        },
        {
          '&:hover': {
            backgroundColor: handleColor(func, 'background')
          }
        }
      ]}
      onClick={() => handleFunction(func)}>
      {icon}
    </IconButton>
  );
}

IconButtonComponent.propTypes = {
  icon: PropTypes.any.isRequired,
  style: PropTypes.any.isRequired,
  func: PropTypes.string.isRequired
};

const iconTiptapHeader = [
  {
    name: 'In đậm',
    function: 'bold',
    icon: <FormatBoldRoundedIcon />
  },
  {
    name: 'In nghiêng',
    function: 'italic',
    icon: <FormatItalicRoundedIcon />
  },
  {
    name: 'Gạch chân',
    function: 'underline',
    icon: <FormatUnderlinedRoundedIcon />
  },
  {
    name: 'Heading 1',
    function: 'heading 1',
    icon: <Filter1RoundedIcon />
  },
  {
    name: 'Heading 2',
    function: 'heading 2',
    icon: <Filter2RoundedIcon />
  },
  {
    name: 'Heading 3',
    function: 'heading 3',
    icon: <Filter3RoundedIcon />
  },
  {
    name: 'Heading 4',
    function: 'heading 4',
    icon: <Filter4RoundedIcon />
  },
  {
    name: 'Heading 5',
    function: 'heading 5',
    icon: <Filter5RoundedIcon />
  },
  {
    name: 'Heading 6',
    function: 'heading 6',
    icon: <Filter6RoundedIcon />
  },
  {
    name: 'Danh sách gạch đầu dòng',
    function: 'bulletList',
    icon: <FormatListBulletedRoundedIcon />
  },
  {
    name: 'Danh sách đánh số thứ tự',
    function: 'orderedList',
    icon: <FormatListNumberedRoundedIcon />
  }
];

function Tiptap(props) {
  const dispatch = useDispatch();

  editor =
    props.edit_product === null
      ? useEditor({
          extensions: [StarterKit, Underline],
          content: '',
          onUpdate({ editor }) {
            setTimeout(() => dispatch(setCurrentDescription(editor.getHTML())), 250);
          }
        })
      : useEditor({
          extensions: [StarterKit, Underline],
          content: `${props.edit_product}`,
          onUpdate({ editor }) {
            setTimeout(() => dispatch(setCurrentDescription(editor.getHTML())), 250);
          }
        });

  React.useEffect(() => {
    if (props.edit_product !== null) {
      editor?.commands.setContent(props.edit_product);
    }
  }, [editor, props.edit_product]);

  return (
    <div>
      <div className="m-b-4">
        {iconTiptapHeader.map((item, index) => (
          <IconButtonComponent
            key={item.name}
            icon={item.icon}
            func={item.function}
            style={`${index < iconTiptapHeader.length - 1 ? '4px' : ''}`}
          />
        ))}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

Tiptap.propTypes = {
  edit_product: PropTypes.any
};

export default Tiptap;
