@props([
    'disabled' => false,
    'type' => "button"
])

<div>
    <button
    type="{{ $type }}"
    {{ $disabled ? 'disabled' : '' }}
    {!! $attributes->merge(['class' => 'inline-flex items-center justify-center py-2 px-5 text-xs font-semibold rounded-sm']) !!}
    >
        {{ $slot }}
    </button>
</div>
