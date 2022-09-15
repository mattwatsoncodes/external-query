import { InspectorControls, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes: { endpoint }, setAttributes } ) {
	const blockProps = useBlockProps();

	// The only inner block we can use here is an external template block.
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [
			'external-template/external-template',
		],
		template: [
			[ 'external-template/external-template' ]
		],
	} );

	/**
	 * The inspector controls would need expanding to include items such as:
	 * - How many posts do we want to display
	 * - Start at page (pagination)
	 * - Filtering controls (filter by JSON data parameters)
	 *
	 * There would likely also be the need for an external query pagination block.
	 */
	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				className="meta-block-settings"
				title={ __( 'Settings', 'meta-block' ) }
			>
				<TextControl
					help={ __( 'Enter the URL of the External JSON Feed', 'meta-block' ) }
					label={ __( 'URL', 'meta-block' ) }
					value={ endpoint }
					onChange={ ( endpoint ) => setAttributes( { endpoint } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
		{ inspectorControls }
		<div { ...innerBlocksProps } />
		</>
	);
}
