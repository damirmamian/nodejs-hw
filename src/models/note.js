// src/models/student.js

import { model, Schema } from 'mongoose';

export const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      trim: true,
      type: String,
      default: '',
    },
    tag: {
      type: String,
      enum: [
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', noteSchema);
