import { fabric } from 'fabric';

const fabricBuiltInEvents = [
  'after:render',
  'before:render',
  'canvas:cleared',
  'mouse:over',
  'mouse:out',
  'mouse:down',
  'mouse:up',
  'mouse:move',
  'object:added',
  'object:modified',
  'object:moving',
  'object:over',
  'object:out',
  'object:removed',
  'object:rotating',
  'object:scaling',
  'object:selected',
  'path:created',
  'before:selection:cleared',
  'selection:cleared',
  'selection:created',
  'text:editing:entered',
  'text:editing:exited',
  'text:selection:changed',
  'text:changed'
];

export default function() {
  let fabricEvents;

  if(fabric.customEvents)
    fabricEvents = fabricBuiltInEvents.concat(fabric.customEvents);
  else
    fabricEvents = fabricBuiltInEvents;
  
  return fabricEvents;
};